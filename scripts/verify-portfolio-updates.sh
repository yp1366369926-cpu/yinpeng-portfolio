#!/usr/bin/env bash
set -euo pipefail

source_file="src/main.jsx"

if grep -Fq '<a href="#practice">练习/外包</a>' "$source_file" || grep -Fq 'id="practice"' "$source_file"; then
  echo "Found removed practice section copy" >&2
  exit 1
fi
grep -Fq '7年工作经验' "$source_file"
grep -Fq '<strong>100w</strong>' "$source_file"
grep -Fq 'title: "HMI概念稿分享"' "$source_file"
grep -Fq 'route: "#project/hmi"' "$source_file"
grep -Fq 'route: "#project/zhuzhu"' "$source_file"
grep -Fq 'route: "#project/b-end"' "$source_file"
grep -Fq 'function VisualProjectCase' "$source_file"
grep -Fq 'function BEndCase' "$source_file"
grep -Fq 'projects/zhuzhu/hero-fullwidth.png' "$source_file"

for asset in cover-generated.png 1.jpg 2.jpg 3.jpg 4.jpg 5.jpg 6.jpg 7.jpg 8.jpg 9.jpg 10.jpg 11.jpg; do
  test -f "public/assets/projects/zhuzhu/$asset"
done
for asset in cover-generated.png $(seq -f '%g.jpg' 1 17); do
  test -f "public/assets/projects/hmi/$asset"
done
test -f "public/assets/projects/zhuzhu/hero-fullwidth.png"
for asset in $(seq -f '%g.png' 1 18); do
  test -f "public/assets/projects/b-end/$asset"
done
grep -Fq 'title: "HMI概念稿分享"' "$source_file"
grep -Fq 'route: "#project/hmi"' "$source_file"
grep -Fq 'route: "#project/zhuzhu"' "$source_file"
grep -Fq 'function VisualProjectCase' "$source_file"

for asset in cover-generated.png 1.jpg 2.jpg 3.jpg 4.jpg 5.jpg 6.jpg 7.jpg 8.jpg 9.jpg 10.jpg 11.jpg; do
  test -f "public/assets/projects/zhuzhu/$asset"
done
for asset in cover-generated.png $(seq -f '%g.jpg' 1 17); do
  test -f "public/assets/projects/hmi/$asset"
done

test -f dist/.openai/hosting.json

if grep -Fq '6年工作经验' "$source_file"; then
  echo "Found stale 6-year experience copy" >&2
  exit 1
fi

if grep -Fq '<strong>01<sup>M</sup></strong>' "$source_file"; then
  echo "Found stale 01M metric" >&2
  exit 1
fi

echo "Portfolio navigation and copy checks passed"
