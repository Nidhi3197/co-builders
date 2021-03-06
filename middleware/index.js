 
 var middlewareObject ={};

 
middlewareObject.isContractorLoggedIn=function(req,res,next){
    if(req.isAuthenticated()){
        if(req.user.role==="Contractor"){
            return next();
        }
        else{
            req.flash("error","Invalid access");
            res.redirect("/")
        }
    }
    req.flash("error","Hi  Please Login First")
    res.redirect("/");
} 

 middlewareObject.isCustomerLoggedIn=function(req,res,next){
    if(req.isAuthenticated()){
        if(req.user.role==="Customer"){
            return next();
        }
        else{
            req.flash("error","Invalid access");
            res.redirect("/")
        }
    }
    req.flash("error","Hi  Please Login First")
    res.redirect("/");
} 

 
//won't work until user database is set
middlewareObject.isUserLogged=function(req,res,next){
    if(username!=null && password!=null){
        console.log("user middleware");
        return next();
    }
    else{
        req.flash("error","Please Create a user acount first")
        res.redirect("/");
    }
}



 module.exports=middlewareObject;