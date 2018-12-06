import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Checklist } from 'src/app/checklist/shared/domain/checklist';

@Injectable({
  providedIn: 'root'
})
export class ChecklistDataService {

  private _checklists: Checklist[] = [];

  private loaded: boolean = false;

  constructor(private storage: Storage) { }

  private findIndex(id: string): number {
    return this._checklists.findIndex(c => c.id === id);
  }

  // TODO: existe ReadonlyArray no Typescript que seria a solução perfeita para mim
  // porém, no template angular, esse tipo não funciona muito bem
  // visto que o item do array não é reconhecido seu tipo, ou seja,
  // não tem auto complete
  // colocar uma questão no stackoverflow
  get checklists(): Checklist[] {
    return this._checklists.slice();
  }

  findChecklistById(id: string): Checklist {
    return this._checklists.find(checklist => checklist.id === id);
  }

  addChecklist(checklist: Checklist) {

    this._checklists.push(checklist);

    this.save();
  }

  removeChecklist(id: string): Checklist {
    const index = this.findIndex(id);

    let removedElement: Checklist = null;

    if (index > -1) {
      removedElement = this._checklists.splice(index, 1)[0];
      this.save();
    }

    return removedElement;
  }

  save(): void {
    this.storage.set('checklists', this._checklists);
  }

  load(): Promise<boolean> {

    return new Promise((resolve) => {

      if (this.loaded) {

        console.log('already loaded');


        resolve(true);

      } else {

        this.storage.get('checklists')
          .then((checklists: Array<any>) => {

            if (checklists) {
                this._checklists = checklists.map(jsonData => Checklist.fromJSON(jsonData));
            }

            this.loaded = true;
            resolve(true);
          });
      }
    });
  }
}
