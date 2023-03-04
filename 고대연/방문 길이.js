function solution(dirs) {
  //이전의 좌표와 이동한 좌표, 이둘의 반대를 각각 set에 저장한다.
  //UDDU인경우는 중복되는 길이므로 길의 길이에 포함하면 안되므로 위와같은 과정을 거치고
  //마지막에 모인 set은 실제 이동한 길이의 2배가된다.

  const set = new Set();
  let curCoordinate = "0,0";

  for (let i = 0; i < dirs.length; i++) {
    const movedCoordinate = move(dirs[i], curCoordinate);

    if (movedCoordinate !== curCoordinate) {
      //UDDU인경우는 중복되는 길이므로 길의 길이에 포함하면 안된다.
      set.add(`${curCoordinate},${movedCoordinate}`);
      set.add(`${movedCoordinate},${curCoordinate}`);
    }
    curCoordinate = movedCoordinate;
  }

  return set.size / 2;
}

function move(dir, curCoordinate) {
  let [x, y] = curCoordinate.split(",");

  switch (dir) {
    case "U":
      y < 5 && y++;
      break;
    case "D":
      y > -5 && y--;
      break;
    case "L":
      x > -5 && x--;
      break;
    case "R":
      x < 5 && x++;
      break;
    default:
      break;
  }

  return `${x},${y}`;
}
