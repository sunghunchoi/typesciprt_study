class Grid {
    Width : number = 0;
    Height : number = 0;
    Padding: number = 0; 
}

class Margin {
    Left : number = 0;
    Top : number = 0;
    Width : number = 0;
    Height : number = 0;
    Padding? : number;
}

function ConsolidatedGrid(grid: Grid, margin: Margin): Grid & Margin {
    let consolidatedGrid = <Grid & Margin>{...grid, ...margin};
    consolidatedGrid.Width += grid.Width;
    consolidatedGrid.Height += grid.Height;
    consolidatedGrid.Padding = margin.Padding ?? grid.Padding;
    return consolidatedGrid;
}

const grid = new Grid();
grid.Height = 10;
grid.Width = 20;

const margin = new Margin();
margin.Left = 20;
margin.Top = 30;
margin.Height = 30;


const consolidated = ConsolidatedGrid(grid, margin)
console.log(consolidated)