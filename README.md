## **Fastify/Universal File Parser**

**This package is a modified version of the package to support the fastify projects. You can checkout** [**the original here**](https://github.com/Ali-A-Koye/universal-file-parser) **.**

The package works the same way with the same functionality as it is called , but : 

*    You  need to register another package that helps the form-data parse 

```typescript
import multer from 'fastify-multer'
fastify.register(multer.contentParser);
```

and that's it , you can simply call the function or use it in any of the hooks.