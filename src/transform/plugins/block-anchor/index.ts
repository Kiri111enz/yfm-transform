import MarkdownIt from 'markdown-it';
import {renderTokens, replaceTokens, TOKEN_NAME} from './block-anchor';

const blockAnchor = (md: MarkdownIt) => {
    md.core.ruler.push(TOKEN_NAME, replaceTokens);
    md.renderer.rules[TOKEN_NAME] = renderTokens;

    return md;
};

export default blockAnchor;