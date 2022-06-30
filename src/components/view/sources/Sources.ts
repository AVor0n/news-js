import { $ } from '../../../utils/common';
import './sources.css';

export type Source = {
    name: string;
    id: string;
};

class Sources {
    draw(data: Source[]) {
        const $fragment = document.createDocumentFragment();
        const $sourceItemTemp = $<HTMLTemplateElement>('#sourceItemTemp');

        data.forEach(item => {
            const $sourceClone = $sourceItemTemp.content.cloneNode(true) as HTMLElement;
            $('.source__item-name', $sourceClone).textContent = item.name;
            $('.source__item', $sourceClone).setAttribute('data-source-id', item.id);
            $fragment.append($sourceClone);
        });

        $('.sources').append($fragment);
    }
}

export default Sources;
