import { ChecklistItem } from './checklist-item';

export class Checklist {

    private _id: string;

    private _title: string;

    private _items: ChecklistItem[];

    constructor() {
        this._items = [];
    }

    public static create(id: string, title: string): Checklist {
        const checkListObj = new Checklist();
        checkListObj.id = id;
        checkListObj.title = title;

        return checkListObj;
    }

    public static fromJSON(jsonData): Checklist {
        const checkListObj = new Checklist();
        return Object.assign(checkListObj, jsonData);
    }

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

    // TODO: existe ReadonlyArray no Typescript que seria a solução perfeita para mim
    // porém, no template angular, esse tipo não funciona muito bem
    // visto que o item do array não é reconhecido seu tipo, ou seja,
    // não tem auto complete
    // colocar uma questão no stackoverflow
    public get items(): ChecklistItem[] {
        return this._items.slice();
    }

    public addItem(checklistItem: ChecklistItem) {
        this._items.push(checklistItem);
    }

    public removeItem(checklistItem: ChecklistItem) {
        const itemIndex = this._items.indexOf(checklistItem);

        if (itemIndex > -1) {
            this._items.splice(itemIndex, 1);
        }
    }
}
