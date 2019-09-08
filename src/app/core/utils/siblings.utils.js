/**
 * Get siblings of an element
 * @param  {Element} elem
 * @return {Object}
 */
export default function getSiblings(elem) {
  var siblings = [];
  var sibling = elem.parentNode.firstChild;
  var skipMe = elem;
  for (; sibling; sibling = sibling.nextSibling)
    if (sibling.nodeType == 1 && sibling != elem) siblings.push(sibling);
  return siblings;
}
