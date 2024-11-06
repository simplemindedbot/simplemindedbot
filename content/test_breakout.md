+++
title = "Testing the Styled Box Shortcode"
date = "2024-11-05T20:00:00-04:00"
lastmod = "2024-11-05T20:00:00-04:00"
description = "Just testing the styled box shortcode."
draft = true

[taxonomies]
tags = [ "Shortcodes", "Testing",]

[extra]
toc = true
changefreq = "weekly"
priority = 0.8
thumbnail = "images/ai-anthropologist-tech.webp"
+++


{% styledbox() %}
## Key Statistics
- Revenue: $1M
- Growth: 20%
- Customers: 500+
- Rating: 4.8/5
{% end %}

{% styledbox(theme="blue", float="right") %}
## Project Overview
**Status**: In Progress
*Last Updated*: 2024-01-15

### Key Features
1. User Authentication
2. Data Analytics
3. API Integration

> Note: This project is scheduled for Q1 completion

[View Documentation →](https://docs.example.com)

| Metric | Value |
|--------|--------|
| Users | 10k+ |
| Uptime | 99.9% |
{% end %}
