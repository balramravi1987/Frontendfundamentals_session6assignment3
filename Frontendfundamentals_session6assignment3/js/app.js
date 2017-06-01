var sum = 0;
for (var i = 1; i <= 1000; i++){
    sum += i;
}
console.log("Output For Loop - " + sum);

sum = 0;
i = 0;
while ( i <= 1000 ) {
    sum += i;
    i++;
}
console.log("Output While Loop - " + sum);
