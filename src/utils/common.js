export const delayPromise = (delayTime) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ptv')
            // reject('Loi ne')
        }, delayTime)
    })
}