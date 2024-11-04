import { Observable } from '@nativescript/core';

export class BaziViewModel extends Observable {
    private _selectedTab: string = '命盤';
    private _heavenlyStems: string[] = ['甲', '庚', '乙', '丙'];
    private _earthlyBranches: string[] = ['申', '午', '未', '寅'];

    constructor() {
        super();
    }

    get selectedTab(): string {
        return this._selectedTab;
    }

    get heavenlyStems(): string[] {
        return this._heavenlyStems;
    }

    get earthlyBranches(): string[] {
        return this._earthlyBranches;
    }

    onTabTap(args: any) {
        const button = args.object;
        this._selectedTab = button.text;
        this.notifyPropertyChange('selectedTab', this._selectedTab);
    }
}