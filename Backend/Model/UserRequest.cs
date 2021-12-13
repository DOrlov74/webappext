using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Model
{
    public class UserRequest
    {
        public UserRequest()
        {
            this.Date = DateTime.UtcNow;
        }
        [Key]
        public int Id { get; set; }
        public DateTime Date { get; set; }
        [Required(ErrorMessage = "The Name is required")]
        public string Name { get; set; }
        [Required(ErrorMessage = "The Organization is required")]
        public string Organization { get; set; }
        [Required(ErrorMessage = "The Role is required")]
        public string Role { get; set; }
        [Required(ErrorMessage = "The Email is required")]
        [EmailAddress]
        public string Email { get; set; }
    }
}
