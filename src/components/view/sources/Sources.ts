import './sources.css';

export type Source = {
    name: string;
    id: string;
};

class Sources {
    draw(data: Source[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
        if (!sourceItemTemp) throw new Error('На странице отсутствует #sourceItemTemp');

        data.forEach(item => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
            const sourceItemName = sourceClone.querySelector<HTMLSpanElement>('.source__item-name');
            const sourceItem = sourceClone.querySelector<HTMLDivElement>('.source__item');

            sourceItemName && (sourceItemName.textContent = item.name);
            sourceItem && sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });
        const sources = document.querySelector('.sources');
        sources && sources.append(fragment);
    }
}

export default Sources;
