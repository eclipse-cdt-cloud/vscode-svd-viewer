import { PeripheralBaseNode } from './basenode';
import { MarkdownString, TreeItem, TreeItemCollapsibleState } from 'vscode';
import { AddrRange } from '../../addrranges';
import { NodeSetting } from '../../common';

export class MessageNode extends PeripheralBaseNode {
    
    constructor(public message: string, public tooltip?: string | MarkdownString) {
        super();
    }

    public getChildren(): PeripheralBaseNode[] | Promise<PeripheralBaseNode[]> {
        return [];
    }

    public getTreeItem(): TreeItem | Promise<TreeItem> {
        const ti = new TreeItem(this.message, TreeItemCollapsibleState.None);
        if (this.tooltip) { // A null crashes VSCode Tree renderer
            ti.tooltip = this.tooltip;
        }
        return ti;
    }

    public getCopyValue(): string | undefined {
        return undefined;
    }

    public performUpdate(): Thenable<any> {
        return Promise.resolve(false);
    }

    public updateData(): Thenable<boolean> {
        return Promise.resolve(false);
    }

    public getPeripheral(): PeripheralBaseNode | undefined {
        return undefined;
    }

    public collectRanges(ary: AddrRange[]): void {
    }

    public saveState(path?: string): NodeSetting[] {
        return [];
    }

    public findByPath(path: string[]): PeripheralBaseNode | undefined {
        return undefined;
    }
}