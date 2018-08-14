using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using ClassLibraryCriacaoPedido.Dados;
using ClassLibraryCriacaoPedido.Entidades;
using Microsoft.AspNetCore.Mvc;

namespace WebApiCriacaoPedido.Controllers {
    [Route ("api/[controller]")]
    public class ValuesController : Controller {
        // GET api/values
        [HttpGet]
        public IEnumerable<Usuario> Get () {
            return null;
        }

        // GET api/values/5
        [HttpGet ("{Login}/{Senha}")]
        public Usuario Get (string login, string senha) {
            return new UsuarioDados ().RetornaUsuarioAutenticado (login, senha);
        }

        // POST api/values
        [HttpPost]
        public void Post ([FromBody] string value) { }

        // PUT api/values/5
        [HttpPut ("{id}")]
        public void Put (int id, [FromBody] string value) { }

        // DELETE api/values/5
        [HttpDelete ("{id}")]
        public void Delete (int id) { }
    }
}