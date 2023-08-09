function spiral(param1) {
  let arr = [];
  let arrBaru = [];
  let left = 0;
  let right = param1 - 1;
  let bottom = 0;
  let up = param1 - 1;
  let counter = 0;

  for (let g = 0; g < param1; g++) {
    arr.push([]);
  }

  for (let i = 0; i < param1; i++) {
    for (let j = 0; j < param1; j++) {
      arr[i][j] = counter;
      counter++;
    }
  }

  while (left <= right && bottom <= up) {
    for (let i = left; i <= right; i++) {
      arrBaru.push(arr[bottom][i]);
    }
    bottom++;

    for (let j = bottom; j <= up; j++) {
      arrBaru.push(arr[j][right]);
    }
    right--;

    if (bottom <= up) {
      for (let k = right; k >= left; k--) {
        arrBaru.push(arr[up][k]);
      }
      up--;
    }

    if (left <= right) {
      for (let l = up; l >= bottom; l--) {
        arrBaru.push(arr[l][left]);
      }
      left++;
    }
  }
  console.log(arrBaru);
}

spiral(5);
spiral(6);
spiral(7);
