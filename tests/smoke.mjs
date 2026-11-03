import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = readFileSync(new URL('../assets/portfolio.js', import.meta.url), 'utf8');
const pdf = readFileSync(new URL('../assets/CV_Nguyen_Cao_Van_Hung.pdf', import.meta.url));
const document = {
  querySelectorAll: () => [],
  querySelector: () => ({ addEventListener() {} })
};
const { translations, technologies } = runInNewContext(`${script}\n({ translations, technologies })`, { document });

for (const [, key] of html.matchAll(/data-i18n="([^"]+)"/g)) {
  assert.ok(key in translations.vi, `Missing Vietnamese translation: ${key}`);
}
const keys = [...html.matchAll(/data-tech="([^"]+)"/g)].map((match) => match[1]);
assert.equal(keys.length, 12);
for (const key of keys) assert.ok(key in technologies, `Missing technology: ${key}`);
assert.equal([...html.matchAll(/class="project"/g)].length, 4);
assert.match(html, /href="assets\/CV_Nguyen_Cao_Van_Hung\.pdf" target="_blank"/);
assert.equal(pdf.subarray(0, 4).toString(), '%PDF');
assert.ok(!html.includes('Want the full picture'));
console.log('Portfolio smoke check passed');
