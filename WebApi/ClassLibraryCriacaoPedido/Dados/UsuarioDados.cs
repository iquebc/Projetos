using System.Data;
using System.Data.SqlClient;
using ClassLibraryCriacaoPedido.Entidades;
using DadosClassLibrary;

namespace ClassLibraryCriacaoPedido.Dados {
    public class UsuarioDados {
        public Usuario RetornaUsuarioAutenticado (string login, string senha) {
            Usuario usuario = new Usuario ();
            SqlCommand command = new Dao ().RetornaSqlCommand ("ValidaUsuario");
            command.Parameters.Add (new Dao ().ReturnParameter ("Login", DbType.String, ParameterDirection.Input, login));
            command.Parameters.Add (new Dao ().ReturnParameter ("Senha", DbType.String, ParameterDirection.Input, senha));
            using (IDataReader reader = new Dao ().ReturnDataReader (command)) {
                while (reader.Read ()) {
                usuario = new Usuario () {
                Login = reader["Login"].ToString (),
                Senha = reader["Senha"].ToString ()
                    };
                }
            }
            return usuario;
        }
    }
}