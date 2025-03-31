using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FatorialRecusivo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("calcular fatorial de qual numero? ");
            int num = int.Parse(Console.ReadLine());
            Console.WriteLine("o fatorial de " + num + " é " + Fatorial(num));
        }

        static int Fatorial(int num)
        {

            if (num <= 0)
            {
                return 1;
            }


            return num * Fatorial(num - 1);
        }
    }
}
