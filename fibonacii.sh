# Program for Fibonacci
# Series
  
# Static input for N
N=$3
 
# First Number of the
# Fibonacci Series
a=$1
 
# Second Number of the
# Fibonacci Series
b=$2
  
echo "The Fibonacci series is : "
  
for (( i=0; i<N; i++ ))
do
    echo -n "$a "
    fn=$((a + b))
    a=$b
    b=$fn
done

# "echo -n   Do not output a trailing newline."