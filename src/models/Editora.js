import mongoose from "mongoose";



const editorasSchema = new mongoose.Schema(
    {
        nomesocial: {type: String, required: true},
        razaosocial: {type: String, required: true},
        endereco: {type: String, required: true},
        telefone: {type: Number}
    }
)

const editoras = mongoose.model('editoras', editorasSchema)

export default editoras
