//CREATING A PAGE FROM WHICH THE USER CAN COMMENT ON THE BLOG

const {Schema,model, SchemaTypeOptions}=require("mongoose");

const commentSchema=new SchemaTypeOptions({
    content:{
        type:String,
        required:true,
    },

    blogId:{
        type: Schema.Types.ObjectId,
        ref:"blog",
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"user",
    }
} ,{timestamps:true}
);const Comment = model("Comment", commentSchema);
module.exports=Comment;