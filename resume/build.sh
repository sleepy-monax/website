#!/bin/sh
pandoc \
    -H header.tex \
    -V lang:fr-FR \
    -V fontsize=10pt \
    -s french.md -o resume-french.pdf