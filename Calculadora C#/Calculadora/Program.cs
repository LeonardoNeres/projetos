using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculadora
{
    class Program
    {
        static void Main(string[] args)
        {

        inicio:

            Console.Clear();

            Console.Write("digite o primeiro numero: ");
            double num1 = double.Parse(Console.ReadLine());

            Console.Write("digite o segundo numero: ");
            double num2 = double.Parse(Console.ReadLine());

            Console.Write("escola a operação (+ - X /): ");
            char op = char.Parse(Console.ReadLine());

            double resultado = 0;

            switch (op)
            {
                default:
                    Console.WriteLine("erro, opção invalida");
                    break;
                case '+':
                    resultado = num1 + num2;
                    Console.WriteLine("o resultado da soma é: " + resultado);
                    break;

                case '-':
                    resultado = num1 - num2;
                    Console.WriteLine("o resultado da subtração é: " + resultado);
                    break;

                case 'x':
                case 'X':
                    resultado = num1 * num2;
                    Console.WriteLine("o resultado da multiplicação é: " + resultado);
                    break;

                case '/':
                case ':':

                    if (num2 == 0)
                    {
                        Console.WriteLine("nao é possivel dividir por 0.");
                    }

                    else
                    {
                        resultado = num1 / num2;
                        Console.WriteLine("o resultado da soma é: " + resultado);
                    }
                    break;
            }

            Console.Write("continuar calculando (s / n)? ");
            string opcao = Console.ReadLine();

            if (opcao == "s" || opcao == "S")
            {
                goto inicio;
            }

        }
    }
}
