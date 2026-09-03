const db = require('../config/db');

exports.listarTodos = (req, res) => {
    db.query('SELECT * FROM produtos', (err, results) => {
        if (err) return res.status(500).json({ erro: err.message });
        res.json(results);
    });
};

exports.buscarPorId = (req, res) => {
    db.query('SELECT * FROM produtos WHERE id = ?', [req.params.id], (err, results) => {
        if (err) return res.status(500).json({ erro: err.message });
        if (results.length === 0) return res.status(404).json({ mensagem: 'Produto não encontrado' });
        res.json(results[0]);
    });
};

exports.cadastrar = (req, res) => {
    const { descricao, quantidade, valor, usuario } = req.body;
    db.query(
        'INSERT INTO produtos (descricao, quantidade, valor, usuario) VALUES (?, ?, ?, ?)',
        [descricao, quantidade, valor, usuario],
        (err, results) => {
            if (err) return res.status(500).json({ erro: err.message });
            res.status(201).json({ mensagem: 'Produto cadastrado!', id: results.insertId });
        }
    );
};

exports.atualizar = (req, res) => {
    const { descricao, quantidade, valor, usuario } = req.body;
    db.query(
        'UPDATE produtos SET descricao=?, quantidade=?, valor=?, usuario=? WHERE id=?',
        [descricao, quantidade, valor, usuario, req.params.id],
        (err) => {
            if (err) return res.status(500).json({ erro: err.message });
            res.json({ mensagem: 'Produto atualizado!' });
        }
    );
};

exports.deletar = (req, res) => {
    db.query('DELETE FROM produtos WHERE id = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ erro: err.message });
        res.json({ mensagem: 'Produto deletado!' });
    });
};

exports.cadastrarLista = (req, res) => {
    const produtos = req.body;
    if (!Array.isArray(produtos) || produtos.length === 0) {
        return res.status(400).json({ erro: 'Envie um array de produtos.' });
    }
    const valores = produtos.map(p => [p.descricao, p.quantidade, p.valor, p.usuario]);
    db.query(
        'INSERT INTO produtos (descricao, quantidade, valor, usuario) VALUES ?',
        [valores],
        (err, results) => {
            if (err) return res.status(500).json({ erro: err.message });
            res.status(201).json({ mensagem: `${results.affectedRows} produtos cadastrados!` });
        }
    );
};