import primes 
import sys
import pika
import json

input_queue ='prime-input'
result_queue='prime-result'

def callback(ch,method,properties,body):
    inParams= json.loads(body.decode('utf-8'))
    min=int(inParams[0])
    max=int(inParams[1])
    print(f'got input min={min}, max={max}')
    results=[ prime for prime in primes.find_primes(min,max)]
    print(f'sending results={results}')
    channel.basic_publish(exchange='', routing_key=result_queue,\
        body=json.dumps(results, ensure_ascii=False))


if __name__ == '__main__':
    connection=pika.BlockingConnection(pika.ConnectionParameters('localhost'))
    channel=connection.channel()

    channel.queue_declare(queue=input_queue)
    channel.queue_declare(queue=result_queue)
    #print(help(channel.basic_consume))
    channel.basic_consume( input_queue,callback)
    print('starting prime service...')
    channel.start_consuming()
    print('started')





