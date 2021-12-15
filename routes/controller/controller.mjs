const showUser= (req,res)=>{
    res.status(200).json({
        status:"Success",
        Data: user
    })
}

const postUser=(req,res)=>{
    
    const newUser= Object.assign(req.body);
    // user.push(newUser);

    fs.writeFile('./data/sample.json',JSON.stringify(user , err=>{
        res.status(200).json({
            status:"success",
            data:{
                user:newUser
            }
        })
    }))


}

module.exports= postUser, showUser;