import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['Serializable']);

export const PrefectureScalarFieldEnumSchema = z.enum(['id','prefectureId','name']);

export const SortOrderSchema = z.enum(['asc','desc']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// PREFECTURE SCHEMA
/////////////////////////////////////////

export const PrefectureSchema = z.object({
  id: z.number().int(),
  prefectureId: z.string(),
  name: z.string(),
})

export type Prefecture = z.infer<typeof PrefectureSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// PREFECTURE
//------------------------------------------------------

export const PrefectureSelectSchema: z.ZodType<Prisma.PrefectureSelect> = z.object({
  id: z.boolean().optional(),
  prefectureId: z.boolean().optional(),
  name: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const PrefectureWhereInputSchema: z.ZodType<Prisma.PrefectureWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrefectureWhereInputSchema),z.lazy(() => PrefectureWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrefectureWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrefectureWhereInputSchema),z.lazy(() => PrefectureWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  prefectureId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const PrefectureOrderByWithRelationInputSchema: z.ZodType<Prisma.PrefectureOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  prefectureId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PrefectureWhereUniqueInputSchema: z.ZodType<Prisma.PrefectureWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => PrefectureWhereInputSchema),z.lazy(() => PrefectureWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrefectureWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrefectureWhereInputSchema),z.lazy(() => PrefectureWhereInputSchema).array() ]).optional(),
  prefectureId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const PrefectureOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrefectureOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  prefectureId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PrefectureCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrefectureAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrefectureMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrefectureMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrefectureSumOrderByAggregateInputSchema).optional()
}).strict();

export const PrefectureScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrefectureScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrefectureScalarWhereWithAggregatesInputSchema),z.lazy(() => PrefectureScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrefectureScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrefectureScalarWhereWithAggregatesInputSchema),z.lazy(() => PrefectureScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  prefectureId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const PrefectureCreateInputSchema: z.ZodType<Prisma.PrefectureCreateInput> = z.object({
  prefectureId: z.string(),
  name: z.string()
}).strict();

export const PrefectureUncheckedCreateInputSchema: z.ZodType<Prisma.PrefectureUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  prefectureId: z.string(),
  name: z.string()
}).strict();

export const PrefectureUpdateInputSchema: z.ZodType<Prisma.PrefectureUpdateInput> = z.object({
  prefectureId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PrefectureUncheckedUpdateInputSchema: z.ZodType<Prisma.PrefectureUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  prefectureId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PrefectureCreateManyInputSchema: z.ZodType<Prisma.PrefectureCreateManyInput> = z.object({
  id: z.number().int().optional(),
  prefectureId: z.string(),
  name: z.string()
}).strict();

export const PrefectureUpdateManyMutationInputSchema: z.ZodType<Prisma.PrefectureUpdateManyMutationInput> = z.object({
  prefectureId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PrefectureUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PrefectureUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  prefectureId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const PrefectureCountOrderByAggregateInputSchema: z.ZodType<Prisma.PrefectureCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  prefectureId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PrefectureAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PrefectureAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PrefectureMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PrefectureMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  prefectureId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PrefectureMinOrderByAggregateInputSchema: z.ZodType<Prisma.PrefectureMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  prefectureId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PrefectureSumOrderByAggregateInputSchema: z.ZodType<Prisma.PrefectureSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const PrefectureFindFirstArgsSchema: z.ZodType<Prisma.PrefectureFindFirstArgs> = z.object({
  select: PrefectureSelectSchema.optional(),
  where: PrefectureWhereInputSchema.optional(),
  orderBy: z.union([ PrefectureOrderByWithRelationInputSchema.array(),PrefectureOrderByWithRelationInputSchema ]).optional(),
  cursor: PrefectureWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrefectureScalarFieldEnumSchema,PrefectureScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PrefectureFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PrefectureFindFirstOrThrowArgs> = z.object({
  select: PrefectureSelectSchema.optional(),
  where: PrefectureWhereInputSchema.optional(),
  orderBy: z.union([ PrefectureOrderByWithRelationInputSchema.array(),PrefectureOrderByWithRelationInputSchema ]).optional(),
  cursor: PrefectureWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrefectureScalarFieldEnumSchema,PrefectureScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PrefectureFindManyArgsSchema: z.ZodType<Prisma.PrefectureFindManyArgs> = z.object({
  select: PrefectureSelectSchema.optional(),
  where: PrefectureWhereInputSchema.optional(),
  orderBy: z.union([ PrefectureOrderByWithRelationInputSchema.array(),PrefectureOrderByWithRelationInputSchema ]).optional(),
  cursor: PrefectureWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrefectureScalarFieldEnumSchema,PrefectureScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PrefectureAggregateArgsSchema: z.ZodType<Prisma.PrefectureAggregateArgs> = z.object({
  where: PrefectureWhereInputSchema.optional(),
  orderBy: z.union([ PrefectureOrderByWithRelationInputSchema.array(),PrefectureOrderByWithRelationInputSchema ]).optional(),
  cursor: PrefectureWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PrefectureGroupByArgsSchema: z.ZodType<Prisma.PrefectureGroupByArgs> = z.object({
  where: PrefectureWhereInputSchema.optional(),
  orderBy: z.union([ PrefectureOrderByWithAggregationInputSchema.array(),PrefectureOrderByWithAggregationInputSchema ]).optional(),
  by: PrefectureScalarFieldEnumSchema.array(),
  having: PrefectureScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PrefectureFindUniqueArgsSchema: z.ZodType<Prisma.PrefectureFindUniqueArgs> = z.object({
  select: PrefectureSelectSchema.optional(),
  where: PrefectureWhereUniqueInputSchema,
}).strict() ;

export const PrefectureFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PrefectureFindUniqueOrThrowArgs> = z.object({
  select: PrefectureSelectSchema.optional(),
  where: PrefectureWhereUniqueInputSchema,
}).strict() ;

export const PrefectureCreateArgsSchema: z.ZodType<Prisma.PrefectureCreateArgs> = z.object({
  select: PrefectureSelectSchema.optional(),
  data: z.union([ PrefectureCreateInputSchema,PrefectureUncheckedCreateInputSchema ]),
}).strict() ;

export const PrefectureUpsertArgsSchema: z.ZodType<Prisma.PrefectureUpsertArgs> = z.object({
  select: PrefectureSelectSchema.optional(),
  where: PrefectureWhereUniqueInputSchema,
  create: z.union([ PrefectureCreateInputSchema,PrefectureUncheckedCreateInputSchema ]),
  update: z.union([ PrefectureUpdateInputSchema,PrefectureUncheckedUpdateInputSchema ]),
}).strict() ;

export const PrefectureCreateManyArgsSchema: z.ZodType<Prisma.PrefectureCreateManyArgs> = z.object({
  data: z.union([ PrefectureCreateManyInputSchema,PrefectureCreateManyInputSchema.array() ]),
}).strict() ;

export const PrefectureCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PrefectureCreateManyAndReturnArgs> = z.object({
  data: z.union([ PrefectureCreateManyInputSchema,PrefectureCreateManyInputSchema.array() ]),
}).strict() ;

export const PrefectureDeleteArgsSchema: z.ZodType<Prisma.PrefectureDeleteArgs> = z.object({
  select: PrefectureSelectSchema.optional(),
  where: PrefectureWhereUniqueInputSchema,
}).strict() ;

export const PrefectureUpdateArgsSchema: z.ZodType<Prisma.PrefectureUpdateArgs> = z.object({
  select: PrefectureSelectSchema.optional(),
  data: z.union([ PrefectureUpdateInputSchema,PrefectureUncheckedUpdateInputSchema ]),
  where: PrefectureWhereUniqueInputSchema,
}).strict() ;

export const PrefectureUpdateManyArgsSchema: z.ZodType<Prisma.PrefectureUpdateManyArgs> = z.object({
  data: z.union([ PrefectureUpdateManyMutationInputSchema,PrefectureUncheckedUpdateManyInputSchema ]),
  where: PrefectureWhereInputSchema.optional(),
}).strict() ;

export const PrefectureDeleteManyArgsSchema: z.ZodType<Prisma.PrefectureDeleteManyArgs> = z.object({
  where: PrefectureWhereInputSchema.optional(),
}).strict() ;