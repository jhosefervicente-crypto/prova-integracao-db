import conexao from "../config/conexao.js";

export async function criarEquipamento(equipamento) {
    const sql = "INSERT INTO equipamentos (codigo_patrimonio, nome, setor) VALUES(?, ?, ?)";
    const [resultado] = conexao.execute(sql, [
        equipamento.codigo_patrimonio,
        equipamento.nome,
        equipamento.setor
    ]);

    return resultado
};

export async function listarEquipamentos() {
    const sql = "SELECT * FROM equipamentos"
    const [resultado] = conexao.execute(sql);

    return resultado;
}

export async function buscarEquipamentoPorId(id) {
    const sql = "SELECT * FROM equipamentos WHERE id = ?"
    const [resultado] = conexao.execute(sql, [id]);

    return resultado[0];
}

export async function atualizarEquipamento(id, equipamento) {
    const sql = "UPDATE INTO equipamentos(codigo_patrimonio, nome, setor) VALUES (?, ?, ?) WHERE id = ?";
    const [resultado] = conexao.execute(sql, [
        equipamento.codigo_patrimonio,
        equipamento.nome,
        equipamento.setor,
        id
    ]);

    return resultado.affectedRows[0]
}

export async function excluirEquipamento(id) {
    const sql = "DELETE FROM equipamentos WHERE id = ?"
    const [resultado] = conexao.execute(sql, [id]);

    return resultado.affectedRows > 0;
}
