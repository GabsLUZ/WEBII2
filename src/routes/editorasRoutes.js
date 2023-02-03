import express from "express"
import EditoraController from "../controllers/editoraController.js"


const router = express.Router()

router 
    .get("/editoras", EditoraController.listareditoras)
    .post("/editoras", EditoraController.cadastrareditora)
    .put("/editoras/:id", EditoraController.atualizareditora)
    .get("/editoras/:id", EditoraController.listarEditoraPorId) 
    .delete("/editoras/:id", EditoraController.excluirEditora) 


export default router

