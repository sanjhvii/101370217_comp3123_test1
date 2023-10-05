function resolvedPromise()
{
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (1 > 0)
            {
                resolve({'message': 'delayed success!'})
            } else
            {
                reject({'error': 'delayed exception!'})
            }
        }, 500);
    })
}

function rejectedPromise()
{
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (1 < 0)
            {
                resolve({'message': 'delayed success!'})
            } else
            {
                reject({'error': 'delayed exception!'})
            }
        }, 500);
    })
}

resolvedPromise().then(fulfilled => console.log(fulfilled), rejected => console.log(rejected))
rejectedPromise().then(fulfilled => console.log(fulfilled), rejected => console.log(rejected))