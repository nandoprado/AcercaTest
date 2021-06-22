using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using apiAcercaTest.Data;
using apiAcercaTest.Model;

namespace apiAcercaTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarDeliveriesController : ControllerBase
    {
        private readonly DataContext _context;

        public CarDeliveriesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/CarDeliveries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CarDeliveries>>> GetCarDeliveries()
        {
            return await _context.CarDeliveries.ToListAsync();
        }

        // GET: api/CarDeliveries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CarDeliveries>> GetCarDeliveries(Guid id)
        {
            var carDeliveries = await _context.CarDeliveries.FindAsync(id);

            if (carDeliveries == null)
            {
                return NotFound();
            }

            return carDeliveries;
        }

        // PUT: api/CarDeliveries/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCarDeliveries(Guid id, CarDeliveries carDeliveries)
        {
            if (id != carDeliveries.ID)
            {
                return BadRequest();
            }

            _context.Entry(carDeliveries).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarDeliveriesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CarDeliveries
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CarDeliveries>> PostCarDeliveries(CarDeliveries carDeliveries)
        {
            _context.CarDeliveries.Add(carDeliveries);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCarDeliveries", new { id = carDeliveries.ID }, carDeliveries);
        }

        // DELETE: api/CarDeliveries/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCarDeliveries(Guid id)
        {
            var carDeliveries = await _context.CarDeliveries.FindAsync(id);
            if (carDeliveries == null)
            {
                return NotFound();
            }

            _context.CarDeliveries.Remove(carDeliveries);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CarDeliveriesExists(Guid id)
        {
            return _context.CarDeliveries.Any(e => e.ID == id);
        }
    }
}
