

def is_prime(number):
    if number<2: return False
    if number==2: return True

    for value in range(2,number):
        if number%value==0: return False

    return True

def find_primes(min,max=None): 
    if max is None: 
        min,max=2,min

    for number in range(min,max):
        if is_prime(number): 
            yield number

