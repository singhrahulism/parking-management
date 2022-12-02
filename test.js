let parked = [2, 4, 5]

while(true)
{
    let num = (Math.floor(Math.random() * (15))+1)
    if(!parked.includes(num))
    {
        console.log('does not include: ', num)
        break
    }
    console.log('does include: ', num)
}