import express from "express";
import Url from "../module/url.js";
import { nanoid } from "nanoid";

const router = express.Router();



router.post('/',async(req,res)=>{
    try{
        const {orignalurl}=req.body;
        if(!orignalurl){
            return res.status(400).json({message:'orignal url is required'});
        }

        try{
            new URL(orignalurl);

        }catch{
             return res.status(400).json({
                message: 'Please enter a valid URL'
            });
        }
      
        const shortcode =nanoid(6);
        const newurl = new Url({
            orignalurl:orignalurl,
            shortcode:shortcode,
           
        });

       const response= await newurl.save();
       return res.status(200).json({
        orignalurl: response.orignalurl,
        shortcode:response.shortcode,
          shorturl:`${process.env.BASE_URL}/${response.shortcode}`
       });

    }catch(error){
        console.log(error);
        res.status(500).json({error:'internal server error'});
    }
});



router.get('/:shortcode',async(req,res)=>{
    try{
        const url = await Url.findOne({shortcode:req.params.shortcode});
        if(!url){
            return res.status(404).json({error:'shorturl not found'});
        }

        return res.redirect(url.orignalurl);

    }catch(error){
        console.log(error);
        res.status(500).json({error:'internal server error'});
    }
});

export default router;