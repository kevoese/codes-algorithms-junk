export const makeCancelable = promise => {
  let hasCanceled_ = false;
  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      val => (hasCanceled_ ? reject({ isCanceled: true }) : resolve(val)),
      error => (hasCanceled_ ? reject({ isCanceled: true }) : reject(error))
    );
  });

  const cancel = () => (hasCanceled_ = true);
  return { promise: wrappedPromise, cancel };
};

// export const delay = time => {
//   let timeout;
//   const promise = new Promise(resolve => {
//     timeout = setTimeout(() => {
//       resolve();
//     }, time);
//   });
//   return { promise, timeout };
// };
