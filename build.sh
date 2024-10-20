#!/bin/bash
curl -fsSL https://github.com/getzola/zola/releases/download/v0.19.2/zola-v0.19.2-x86_64-unknown-linux-gnu.tar.gz | tar -xvz
mv zola /usr/local/bin/
zola build
