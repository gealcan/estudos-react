import React, { Component } from "react";
import "./App.css";
import palette from "./assets/fireColorsPalette";

const fireWidth = 60;
const fireHeight = 50;

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const tableCellStyle = value => {
  const color = palette[value];
  const hexColor = rgbToHex(color.r, color.g, color.b);

  return {
    width: 4,
    height: 4,
    backgroundColor: hexColor
    // border: "solid 1px white"
  };
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      debug: false,
      firePixelsArray: Array(fireHeight * fireWidth).fill(0)
    };

    this.rowsArray = Array(fireHeight).fill(0);

    this.columnsArray = Array(fireWidth).fill(0);

    this.createFireSource = () => {
      const { firePixelsArray } = this.state;
      let fireSource = [...firePixelsArray];

      for (let i = 0; i < fireWidth; i += 1) {
        fireSource[i] = palette.length - 1;
      }

      // const fireSource = firePixelsArray.map((d, i) => (
      //   i < fireWidth ? palette.length - 1 : d
      // ))

      this.setState({ firePixelsArray: fireSource });
    };

    this.updateFire = () => {
      const { firePixelsArray } = this.state;
      const newArray = [...firePixelsArray];

      for (let i = 0; i < fireHeight; i += 1) {
        for (let j = 0; j < fireWidth; j += 1) {
          const myIndex = i * fireWidth + j;
          const myValue = firePixelsArray[myIndex];
          const decay = Math.floor(Math.random() * 3);

          const belowIndex = myIndex - fireWidth;

          if (belowIndex < 0) {
            continue;
          }

          const myNewValue = firePixelsArray[belowIndex] - decay;
          newArray[myIndex - decay] = myNewValue >= 0 ? myNewValue : myValue;
        }
      }

      this.setState({ firePixelsArray: newArray });
    };

    this.renderTable = () => {
      const { firePixelsArray } = this.state;
      let htmlTable = [];

      for (let i = 0; i < fireHeight; i += 1) {
        let row = [];

        for (let j = 0; j < fireWidth; j += 1) {
          const offset = i * fireWidth + j;

          row[j] = (
            <td
              key={`col-${j}`}
              style={tableCellStyle(firePixelsArray[offset])}
            >
              {/* {offset} */}
            </td>
          );
        }

        htmlTable[i] = <tr key={`row-${i}`}>{row}</tr>;
      }

      return htmlTable;
    };
  }

  componentDidMount() {
    this.createFireSource();

    setInterval(() => {
      this.updateFire();
    }, 30);
  }

  render() {
    const { firePixelsArray } = this.state;
    // console.log("Array", firePixelsArray);

    return (
      <div className="fireCanvas">
        <table style={{ borderSpacing: 0 }}>
          <tbody>
            {/* {this.renderTable()} */}

            {this.rowsArray.map((d, i) => (
              <tr key={`row-${i}`}>
                {this.columnsArray.map((d, j) => (
                  <td
                    key={`column-${j}`}
                    style={tableCellStyle(firePixelsArray[i * fireWidth + j])}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
