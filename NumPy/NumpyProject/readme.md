# 🧬 Vectorized Conway's Game of Life (Pure NumPy)

A lightning-fast implementation of John Conway's Game of Life built using **pure NumPy** and zero nested `for` loops. By leveraging matrix slicing (`np.roll`) and 3D tensor reduction, this simulation computes and renders generations instantly in your terminal.

![Python](https://img.shields.io/badge/Python-3.x-blue.svg)
![NumPy](https://img.shields.io/badge/NumPy-Vectorized-orange.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

---

## ✨ Features

* **100% Vectorized:** No slow Python loops checking cells one by one. The entire grid updates simultaneously using matrix operations.
* **Pac-Man Edge Wrapping:** Uses NumPy's roll feature so that edges wrap around seamlessly.
* **Terminal Animation:** Live ASCII rendering (`█` for alive, space for dead) with a smooth refresh loop.

---

## 🧠 How the Logic Works (The Core Magic)

Standard implementations check every single cell using slow loops. This project uses **NumPy matrix transformations** to handle the entire grid at once.

### 1. Shifting Neighbors with `np.roll`
To count neighbors, we slide ("roll") copies of the grid in all 8 surrounding directions simultaneously. Because it's a toroidal (Pac-Man) grid, items falling off one edge wrap around to the other side:

```text
Original Grid          Shifted Down (axis=0, shift=-1)
[ 0  1  0 ]                 [ 1  0  1 ]  <-- Bottom row wrapped to top
[ 1  1  0 ]        ===>     [ 0  1  0 ]
[ 0  0  1 ]                 [ 1  1  0 ]
```

### 2. The 3D Stacking Trick (`np.sum`)
We generate all 8 shifted directions, stack them into a 3D tensor of shape `(8, height, width)`, and look straight down through the stack (`axis=0`) to sum the overlapping bits:

```text
       Layer 1 (Up)     \
       Layer 2 (Down)    \
       Layer 3 (Left)     ---> [ 3D Tensor: (8, Height, Width) ] 
       ... (8 Layers)    /        │
       Layer 8 (Diag)   /         ▼
                            np.sum(stacked, axis=0)
                                  │
                                  ▼
                         [ Final 2D Neighbor Counts ]
                               (e.g., values 0 to 8)
```

### 3. Boolean Rule Application
Once we have the `neighbors` count grid and the original `grid2d`, we apply Conway's rules using clean boolean masks without a single `if/else` statement:

* **Survival:** Living cell (`1`) with 2 or 3 neighbors.
* **Birth:** Dead cell (`0`) with exactly 3 neighbors.

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Python and NumPy installed:
```bash
pip install numpy
```

### Installation & Running
1. Clone this repository or download the script:
   ```bash
   git clone https://github.com/Dope-Otaku/heavy_grinding/tree/main/NumPy/NumpyProject
   cd numpy-game-of-life
   ```
2. Run the script:
   ```bash
   python game_of_life.py | grid.py
   ```

---

## 📜 Code Preview

```python
import numpy as np
import time
import os

height, width = 20, 40
grid2d = np.random.randint(0, 2, size=(height, width))

while True:
    # 1. Gather all 8 shifted neighbor grids
    positions = [
        np.roll(grid2d, 1, axis=0), np.roll(grid2d, -1, axis=0),
        np.roll(grid2d, 1, axis=1), np.roll(grid2d, -1, axis=1),
        np.roll(np.roll(grid2d, 1, axis=0), 1, axis=1),
        np.roll(np.roll(grid2d, 1, axis=0), -1, axis=1),
        np.roll(np.roll(grid2d, -1, axis=0), 1, axis=1),
        np.roll(np.roll(grid2d, -1, axis=0), -1, axis=1)
    ]
    
    # 2. Sum the 3D stack along axis=0 to get neighbor counts
    neighbors = np.sum(np.array(positions), axis=0)

    # 3. Apply Conway's Game of Life rules via NumPy boolean masks
    survivors = (grid2d == 1) & ((neighbors == 2) | (neighbors == 3))
    births = (grid2d == 0) & (neighbors == 3)
    grid2d = (survivors | births).astype(int)

    # 4. Render to terminal
    os.system('cls' if os.name == 'nt' else 'clear')
    for row in grid2d:
        print("".join("█" if cell == 1 else " " for cell in row))
        
    time.sleep(0.1)
```

---

## 💡 Acknowledgments
Built as an exploration into high-performance array computing and vectorized game logic with NumPy.