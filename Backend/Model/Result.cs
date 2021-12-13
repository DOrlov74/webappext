using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Model
{
    public class Result
    {
        public Result(bool success, string msg)
        {
            this.success = success;
            this.msg = msg;
        }
        public bool success { get; set; }
        public string msg { get; set; }
    }
}
