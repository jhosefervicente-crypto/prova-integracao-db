import conexao from "../config/conexao";

export async function criarCalibracao(calibracao) {
    const sql = "INSERT INTO calibracoes(data_calibracao, resultado, responsavel) VALUES (?, ?, ?)";
    const [resultado] = await conexao.execute(sql, [
        calibracao.data_calibracao,
        calibracao.resultado,
        calibracao.responsavel
    ]);

    return resultado;
}

export async function listarCalibracoes() {
    const sql = "SELECT * FROM calibracoes ";
    const [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function listarCalibracoesDetalhadas() {
}

export async function buscarCalibracaoPorId(id) {
    const sql = "SELECT * FROM calibracoes WHERE id = ?"
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado[0];
}

export async function atualizarCalibracao(id, calibracao) {
    const sql = "UPDATE INTO calibracoes(data_calibracao, resultado, responsavel) VALUES (?, ?, ?) WHERE id = ?";
    const [resultado] = await conexao.execute(sql, id, [
        calibracao.data_calibracao,
        calibracao.resultado,
        calibracao.responsavel
    ]);

    return resultado.affectedRows;
}

export async function excluirCalibracao(id) {
    const sql = "DELETE FROM calibracoes WHERE id = ?"
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado.affectedRows > 0;
}
