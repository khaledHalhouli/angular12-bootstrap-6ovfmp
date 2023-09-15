import { Component, Inject, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    @Inject(DOCUMENT) document: Document
  ) {}
  ngOnInit() {
    this.loopFunction();
  }
  public open(modal: any): void {
    this.modalService.open(modal);
  }
  row = 0;
  col = 12;

  loopFunction() {
    let array = [
      {
        id: 0,
        cols: 6,
        rows: 1,
        size: '12',
        element: {
          type: 'image',
          setting: {},
        },
        color: 'lightblue',
        index: 1,
      },
      {
        id: 4,
        cols: 6,
        rows: 2,
        size: '12',
        element: {
          type: 'thumbnail',
          setting: {},
        },
        color: 'lightblue',
        index: 0,
      },
      {
        id: 1,
        cols: 6,
        rows: 1,
        size: '12',
        element: {
          type: 'title',
          setting: {},
        },
        color: 'lightblue',
        index: 2,
      },

      {
        id: 2,
        cols: 12,
        rows: 1,
        size: '12',
        element: {
          type: 'description',
          setting: {},
        },
        color: 'lightblue',
        index: 3,
      },
    ];

    array.forEach((ele) => {
      this.createElement(ele);
    });
  }
  x: any = [];
  createElement(item) {
    console.log(this.x);
    if (!this.x.length || this.x[this.x.length - 1].colSize > item.cols) {
      this.row = item.rows;
      this.col = this.col - item.cols;

      console.log(
        ' create row1& create div1->class col-item.col',
        item.cols,
        item.index
      );
      let obj = {
        row: {
          size: item.rows,
          colSize: 12 - item.cols,
          cols: [{ rowSize: item.rows, colSize: item.cols }],
        },
      };
      this.x.push(obj);
      // create row1& create div1->class col-item.col
      return;
    } else if (item.rows != 1) {
      // call it self
    }
    console.log(231);
    // for (let i = 0; i < this.x[this.x.length - 1].row?.cols.length; i++) {
    //   console.log(1);
    //   let ele = this.x[this.x.length - 1].row?.cols[i];
    //   if (ele.colSize - item.cols > 0) {
    //     this.col = this.col - item.cols;
    //     console.log(
    //       'create in row1-> div2->class col-item.col',
    //       item.cols,
    //       item.index
    //     );
    //     // create in row1-> div2->class col-item.col
    //     this.x[this.x.length - 1].row?.cols.push({
    //       rowSize: item.rows,
    //       colSize: item.cols,
    //     });
    //     break;
    //   } else if (ele.colSize - item.cols == 0) {
    //     console.log(
    //       ' create in row1-> div2->class col-item.col',
    //       item.cols,
    //       item.index
    //     );
    //     // create in row1-> div2->class col-item.col
    //     this.row = this.row - 1;
    //     this.col = 12;
    //     this.x[this.x.length - 1].row?.cols.push({
    //       rowSize: item.rows,
    //       colSize: item.cols,
    //     });
    //   } else if (ele.colSize - item.cols < 0) {
    //     this.row = item.rows;
    //     this.col = 12 - item.cols;
    //     console.log(
    //       'create row2&create div-class col-item.col',
    //       item.cols,
    //       item.index
    //     );
    //     // create row2&create div-class col-item.col
    //   }
    // }
  }

  getDom() {
    const hideEle = document.querySelector('test') as HTMLElement;
    // const hideEle2=document.getElementsByClassName('backred')

    console.log(hideEle, hideEle, 'ee', document);
  }
}
