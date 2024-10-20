#!/bin/bash
curl -fsSL https://github.com/getzola/zola/releases/latest/download/zola-x86_64-unknown-linux-gnu.tar.gz | tar -xvz
mv zola /usr/local/bin/
zola build
