import prismaClient from "../../prisma";

class GetCategoryService {
  async execute() {
    const categories = prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return categories;
  }
}

export { GetCategoryService };
