import { Address } from "../Models/Address.js";

export const addAddress = async (req, res) => {
    const { fullName, address, city, state, country, pincode, phoneNumber } = req.body;
    const userId = await req.user._id;  // assuming `req.user` contains the authenticated user's info


        const userAddress = await Address.create({
            userId,
            fullName,
            address,
            city,
            state,
            country,
            pincode,
            phoneNumber
        });

        res.json({ message: "Address added", userAddress,success:true });
};

export const getAddress = async (req,res) =>{
    const userId = await req.user._id;
     let address = await Address.find({userId}).sort({createdAt:-1})
     res.json({message:'address',userAddress:address[0]})
}
