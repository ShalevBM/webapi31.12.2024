module.exports=(req,res,next)=>{
    let arrIps=["192.168.15","::1","8.6.5.9"];
    for (let i=0;i<arrIps.length;i++)
    {
        if(req.ip==arrIps[i])
        {
            return next();
        }
    }
    return res.status(401).json({Msg:`Not Authorized`});
};