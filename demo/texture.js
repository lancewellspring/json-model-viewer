var texture =
'data:image/png;base64,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'