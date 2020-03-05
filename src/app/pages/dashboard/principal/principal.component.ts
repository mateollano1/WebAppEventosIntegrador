import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {name: "Eventos"},
  {
    name: 'Conferencias',
    children: [
      {name: 'Ver'},
      {name: 'Agregar'},
    ]
  },{
    name: 'Empresas',
    children: [
      {name: 'Ver'},
      {name: 'Agregar'},
    ]
  },{
    name: 'Stand',
    children: [
      {name: 'Ver plano'},
      {name: 'Agregar'},
    ]
  },
  {name: 'Patrocinadores',
children:[
  {name:''}
]}
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  constructor() {
    this.dataSource.data = TREE_DATA;
   }
   hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  ngOnInit(): void {
  }

}
