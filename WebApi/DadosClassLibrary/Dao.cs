using System;
using System.Data;
using System.Data.SqlClient;

namespace DadosClassLibrary {
    public class Dao {

        private string RetornaStringConexao () {
            return @"Server=DESKTOP-6HGKD8M\SQLEXPRESS; Database=CriacaoPedido; Trusted_Connection=True; MultipleActiveResultSets=true; user id=sa; password=henrique123";
        }

        private SqlConnection RetornaSqlConnection () {
            SqlConnection conexao = new SqlConnection (RetornaStringConexao ());
            conexao.Open ();
            return conexao;
        }

        public SqlCommand RetornaSqlCommand (string nomeProcedure) {
            SqlCommand command = new SqlCommand (nomeProcedure, RetornaSqlConnection ());
            command.CommandType = CommandType.StoredProcedure;
            return command;
        }

        public SqlDataReader ReturnDataReader (SqlCommand command) {
            return command.ExecuteReader ();
        }

        public SqlParameter ReturnParameter (string nomeParametro, DbType dbtype, ParameterDirection parameterDirection, string valor, int size = 0) {
            SqlParameter parametro = new SqlParameter (nomeParametro, dbtype);
            parametro.Direction = parameterDirection;
            parametro.Value = valor;
            if (size > 0)
                parametro.Size = size;

            return parametro;
        }
    }
}