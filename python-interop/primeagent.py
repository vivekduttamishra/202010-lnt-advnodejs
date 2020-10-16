import primes 
import sys

if __name__ == '__main__':
    #print(sys.argv)
    min=int(sys.argv[1])
    max=int(sys.argv[2])
    for number in primes.find_primes(min,max):
        print(number)
    sys.stdout.flush()



